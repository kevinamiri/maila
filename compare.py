import numpy as np
import wave
import struct

class DeepMusicGenerator:
    def __init__(self, sample_rate=44100):
        self.sample_rate = sample_rate
        self.data = []
        
        # Extended note range including lower octaves for bass
        self.notes = {
            # Bass notes
            'C2': 65.41, 'D2': 73.42, 'E2': 82.41, 'F2': 87.31,
            'G2': 98.00, 'A2': 110.00, 'B2': 123.47,
            # Middle notes
            'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61,
            'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
            'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23,
            'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
            # Higher notes
            'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46,
            'G5': 783.99, 'A5': 880.00, 'B5': 987.77
        }

    def sine_wave(self, frequency, duration, amplitude=0.5):
        t = np.linspace(0, duration, int(self.sample_rate * duration), False)
        return amplitude * np.sin(2 * np.pi * frequency * t)

    def pad_sound(self, frequency, duration, amplitude=0.3):
        """Create a rich pad sound using multiple sine waves"""
        t = np.linspace(0, duration, int(self.sample_rate * duration), False)
        
        # Create multiple harmonics with different amplitudes
        wave = (
            amplitude * np.sin(2 * np.pi * frequency * t) +  # fundamental
            amplitude * 0.5 * np.sin(2 * np.pi * (frequency * 2) * t) +  # octave
            amplitude * 0.25 * np.sin(2 * np.pi * (frequency * 3) * t) +  # 12th
            amplitude * 0.15 * np.sin(2 * np.pi * (frequency * 4) * t)    # double octave
        )
        
        # Apply smooth envelope
        envelope = np.exp(-0.5 * t) * np.exp(t/duration)
        return wave * envelope

    def bass_sound(self, frequency, duration, amplitude=0.5):
        """Create a deep bass sound"""
        t = np.linspace(0, duration, int(self.sample_rate * duration), False)
        
        # Combine sine and square waves for richer bass
        sine = amplitude * np.sin(2 * np.pi * frequency * t)
        square = amplitude * 0.3 * np.sign(np.sin(2 * np.pi * frequency * t))
        
        wave = sine + square
        
        # Apply bass-specific envelope
        envelope = np.exp(-2 * t) * np.exp(t/duration)
        return wave * envelope

    def add_chord(self, root_note, chord_type='maj', duration=1.0):
        """Add a full chord with bass and pad sounds"""
        if root_note not in self.notes:
            return
        
        root_freq = self.notes[root_note]
        
        # Define chord intervals based on type
        if chord_type == 'maj':
            intervals = [1, 1.26, 1.5]  # Major chord (root, major third, fifth)
        elif chord_type == 'min':
            intervals = [1, 1.189, 1.5]  # Minor chord (root, minor third, fifth)
        elif chord_type == 'dim':
            intervals = [1, 1.189, 1.414]  # Diminished chord
        
        # Create chord with pad sound
        chord_wave = np.zeros(int(self.sample_rate * duration))
        for interval in intervals:
            chord_wave += self.pad_sound(root_freq * interval, duration, 0.2)
        
        # Add bass note
        bass_freq = root_freq / 2  # One octave lower
        chord_wave += self.bass_sound(bass_freq, duration, 0.3)
        
        self.data.extend(chord_wave)

    def add_melody_note(self, note, duration, amplitude=0.3):
        """Add a melody note with a rich timbre"""
        if note == 'REST':
            self.data.extend(np.zeros(int(self.sample_rate * duration)))
            return
            
        if note in self.notes:
            freq = self.notes[note]
            wave = self.pad_sound(freq, duration, amplitude)
            self.data.extend(wave)

    def save_wav(self, filename):
        print(f"Saving {filename}...")
        audio_data = np.array(self.data)
        # Normalize
        audio_data = audio_data / (np.max(np.abs(audio_data)) + 1e-6)
        audio_data = (audio_data * 32767).astype(np.int16)
        
        with wave.open(filename, 'w') as wav_file:
            wav_file.setnchannels(1)
            wav_file.setsampwidth(2)
            wav_file.setframerate(self.sample_rate)
            for sample in audio_data:
                wav_file.writeframes(struct.pack('h', sample))
        
        self.data = []

def create_deep_jazz():
    music = DeepMusicGenerator()
    
    # Jazz progression (ii-V-I in C)
    progression = [
        ('D3', 'min'),  # ii
        ('G3', 'maj'),  # V
        ('C3', 'maj'),  # I
        ('C3', 'maj'),  # I
    ]
    
    # Play progression with melody
    for root, chord_type in progression:
        music.add_chord(root, chord_type, 2.0)
        
    music.save_wav('deep_jazz.wav')

def create_ambient_piece():
    music = DeepMusicGenerator()
    
    # Slow ambient progression
    progression = [
        ('C3', 'maj', ['E4', 'G4', 'C5']),
        ('A2', 'min', ['C4', 'E4', 'A4']),
        ('F2', 'maj', ['A4', 'C5', 'F5']),
        ('G2', 'maj', ['B4', 'D5', 'G5']),
    ]
    
    # Create ambient piece with chords and melody
    for root, chord_type, melody_notes in progression:
        # Add the chord
        music.add_chord(root, chord_type, 3.0)
        
        # Add arpeggiated melody notes
        for note in melody_notes:
            music.add_melody_note(note, 0.8, 0.2)
            music.add_melody_note('REST', 0.2)
    
    music.save_wav('ambient_deep.wav')

if __name__ == "__main__":
    print("🎹 Generating Deep Music...")
    
    print("\n🎷 Creating Jazz Progression...")
    create_deep_jazz()
    
    print("\n🌌 Creating Ambient Piece...")
    create_ambient_piece()
    
    print("\n✨ Done! Check out:")
    print("- deep_jazz.wav")
    print("- ambient_deep.wav")