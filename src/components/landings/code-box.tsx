import React, { FC, ChangeEvent, useEffect, useState } from 'react';
import { alpha } from '@mui/system/colorManipulator';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import { FileCopyOutlined } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { codeStyle } from 'utils/code-styles';

interface Sample {
    lang: 'yaml' | 'json' | 'curl';
    label: string;
    icon: string;
    code: string;
}

const curlAPI = `
curl -X GET "https://keyword-explorer.maila.ai/related-keywords?keyword=SEO" \
-H "accept: application/json"




`;

const CodeDisplayComponent: FC = () => {
    const [schemaJson, setSchemaJson] = useState<string>('');
    const [schemaSpecification, setSchemaSpecification] = useState<string>('');
    const [schemaCurl, setSchemaCurl] = useState<string>('');

    const samples: Sample[] = [
        {
            lang: 'yaml',
            label: 'OpenAPI Specification',
            icon: '/assets/logos/yaml.svg',
            code: JSON.stringify(schemaSpecification, null, 2),
        },
        {
            lang: 'json',
            label: 'JSON Schema',
            icon: '/assets/logos/json.svg',
            code: JSON.stringify(schemaJson, null, 2),
        },
        {
            lang: 'curl',
            label: 'API (curl)',
            icon: '/assets/logos/curl.svg',
            code: JSON.stringify(curlAPI, null, 2),
        },
    ];
    const [lang, setLang] = useState<string>(samples[0].lang);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Copying to clipboard was successful!');
        } catch (err) {
            console.error('Could not copy text: ', err);
        }
    };

    const handleLangChange = (event: ChangeEvent<any>, value: string): void => {
        setLang(value);
    };

    const code = samples.find((sample) => sample.lang === lang)?.code.trim() || '';

    useEffect(() => {
        fetch('https://keyword-explorer.maila.ai/.well-known/openapi.yaml')
            .then((response) => response.text())
            .then((data) => setSchemaSpecification(data));
    }, []);

    useEffect(() => {
        fetch('https://keyword-explorer.maila.ai/.well-known/ai-plugin.json')
            .then((response) => response.text())
            .then((data) => setSchemaJson(data));
    }, []);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '50%',
                    overflow: 'auto',
                    my: 4,
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{
                        backdropFilter: 'blur(6px)',
                        backgroundColor: (theme) => alpha(theme.palette.neutral[800], 0.95),
                        borderBottomColor: 'neutral.700',
                        borderBottomStyle: 'solid',
                        borderBottomWidth: 1,
                        borderTopLeftRadius: (theme) => theme.shape.borderRadius,
                        borderTopRightRadius: (theme) => theme.shape.borderRadius,
                        boxShadow: 24,
                        px: 2,
                    }}
                >
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={1}
                        sx={{
                            py: 2,
                            '& > div': {
                                backgroundColor: 'rgba(255, 255, 255, 0.16)',
                                borderRadius: '50%',
                                height: 10,
                                width: 10,
                            },
                        }}
                    >
                        <div />
                        <div />
                        <div />
                    </Stack>
                    <Tabs
                        variant="scrollable"
                        scrollButtons="auto"
                        onChange={handleLangChange} value={lang}>
                        {samples.map((sample) => (
                            <Tab
                                key={sample.lang}
                                label={
                                    <Stack alignItems="center" direction="row" spacing={1}>
                                        <Box
                                            sx={{
                                                borderRadius: '4px',
                                                flex: '0 0 auto',
                                                height: 20,
                                                overflow: 'hidden',
                                                width: 20,
                                                '& img': {
                                                    width: '100%',
                                                },
                                            }}
                                        >
                                            <img src={sample.icon} alt={sample.lang} />
                                        </Box>
                                        <Typography sx={{ color: 'neutral.300' }} variant="body2">
                                            {sample.label}
                                        </Typography>
                                    </Stack>
                                }
                                value={sample.lang}
                            />
                        ))}
                    </Tabs>
                </Stack>
                <Box
                    sx={{
                        backdropFilter: 'blur(6px)',
                        backgroundColor: (theme) => alpha(theme.palette.neutral[800], 0.9),
                        borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
                        borderBottomRightRadius: (theme) => theme.shape.borderRadius,
                        flex: '1 1 auto',
                        maxHeight: '350px',
                        overflow: 'auto',
                        p: 2,
                        '& pre': {
                            background: 'none !important',
                            borderRadius: '0 !important',
                            fontSize: '12px !important',
                            height: '100%',
                            m: '0 !important',
                            overflow: 'hidden !important',
                            p: '0 !important',
                        },
                        '& code': {
                            fontSize: '12px !important',
                        },
                    }}
                >
                    <SyntaxHighlighter language={lang} style={codeStyle}>
                        {JSON.parse(code)}
                    </SyntaxHighlighter>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            mt: 2,
                            position: 'sticky',
                            bottom: 0,
                        }}
                    >
                        <IconButton color="primary" onClick={() => copyToClipboard(code)}>
                            <FileCopyOutlined />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export { CodeDisplayComponent };
