export default {
    endpoint: 'https://menubot-278912.core.ushaflow.io', // <- enter your gateway URL here
    muted: false, // <- mute microphone at start
    start_suggestions: [], // <- array of suggestions, displayed at the start screen
    fallback_lang: 'en', // <- fallback language code, if history mode or network is unavailable
    voice: 'native', // <- voice of Text-To-Speech; for reference, see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI,
    audio_encoding: 'audio/mp3' // <- Dialogflow Automatic Text to Speech audio encoding (MIME type)
}
