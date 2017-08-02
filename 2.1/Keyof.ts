interface Resources {
    welcome: string;
    goodbye: string;
}
class EnglishResources implements Resources {
    welcome = "Hello!";
    goodbye = "Goodbye!";
}
class SpanishResources implements Resources {
    welcome = "¡Hola!";
    goodbye = "¡Adiós!";
}
class R {
    private static resources = {
        "en-US": new EnglishResources(),
        "es": new SpanishResources()
    };
    static getString<K extends keyof Resources>(key: K, language?: string) {
        if (!language) {
            language = navigator.language;
        }
        return this.resources[language][key];
    }
}
console.log(R.getString("welcome", "en-US"));
console.log(R.getString("goodbye"));
console.log(R.getString("welcome", 'es'));
console.log(R.getString("goodbye", "es"));