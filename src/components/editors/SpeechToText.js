import React, { useState } from 'react'
import mic from 'microphone-stream';
import Amplify, { Predictions } from 'aws-amplify'
import '../../../configureAmplify'
const initialState = { name: '', description: '' }


const SpeechToText = () => {
    const [response, setResponse] = useState("Press 'start recording' to begin your transcription. Press STOP recording once you finish speaking.")
    const [textToGenerateSpeech, setTextToGenerateSpeech] = useState("write to speech");
    const [formState, setFormState] = useState(initialState)

    function AudioRecorder(props) {
        const [recording, setRecording] = useState(false);
        const [micStream, setMicStream] = useState();
        const [audioBuffer] = useState(
            (function () {
                let buffer = [];
                function add(raw) {
                    buffer = buffer.concat(...raw);
                    return buffer;
                }
                function newBuffer() {
                    console.log("resetting buffer");
                    buffer = [];
                }

                return {
                    reset: function () {
                        newBuffer();
                    },
                    addData: function (raw) {
                        return add(raw);
                    },
                    getData: function () {
                        return buffer;
                    }
                };
            })()
        );

        async function startRecording() {
            console.log('start recording');
            audioBuffer.reset();

            window.navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then((stream) => {
                const startMic = new mic();
                startMic.setStream(stream);
                startMic.on('data', (chunk) => {
                    var raw = mic.toRaw(chunk);
                    if (raw == null) {
                        return;
                    }
                    audioBuffer.addData(raw);

                });

                setRecording(true);
                setMicStream(startMic);
            });
        }

        async function stopRecording() {
            console.log('stop recording');
            const { finishRecording } = props;

            micStream.stop();
            setMicStream(null);
            setRecording(false);

            const resultBuffer = audioBuffer.getData();

            if (typeof finishRecording === "function") {
                finishRecording(resultBuffer);
            }

        }

        return (
            <div className="audioRecorder">
                <div>
                    {recording && <button onClick={stopRecording}>Stop recording</button>}
                    {!recording && <button onClick={startRecording}>Start recording</button>}
                </div>
            </div>
        );
    }


    function convertFromBuffer(bytes) {
        setResponse('Converting text...');

        Predictions.convert({
            transcription: {
                source: {
                    bytes
                },
                // language: "en-US", // other options are "en-GB", "fr-FR", "fr-CA", "es-US"
            },
        }).then(({ transcription: { fullText } }) => setResponse(fullText))
            .catch(err => setResponse(JSON.stringify(err, null, 2)))
    }

    function generateTextToSpeech() {
        // setResponse('Generating audio...');
        Predictions.convert({
            textToSpeech: {
                source: {
                    text: response,
                },
                voiceId: "Amy" // default configured on aws-exports.js 
                // list of different options are here https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
            }
        }).then(result => {
            let AudioContext = window.AudioContext || window.webkitAudioContext;
            console.log({ AudioContext });
            const audioCtx = new AudioContext();
            const source = audioCtx.createBufferSource();
            audioCtx.decodeAudioData(result.audioStream, (buffer) => {

                source.buffer = buffer;
                source.connect(audioCtx.destination);
                source.start(0);
            }, (err) => console.log({ err }));

            // setResponse(`Generation completed, press play`);
        })
            .catch(err => setResponse(err))
    }

    function setText(event) {
        setResponse(event.target.value);
    }

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    return (
        <div style={styles.container}>
            <div className="Text">
                <div>
                    <br />
            Transcribe Audio
            <AudioRecorder finishRecording={convertFromBuffer} />
                    <br />
                    <h3>Text To Speech</h3>
                    <input value={response} onChange={setText}></input>
                    <button onClick={generateTextToSpeech}>Text to Speech</button>
                    <h3>{response}</h3>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
    todo: { marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    todoName: { fontSize: 20, fontWeight: 'bold' },
    todoDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}
export default SpeechToText