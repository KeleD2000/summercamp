export namespace ErroAuthEn {
    export function convertMessage(code: string): string {
        switch (code) {
            case 'auth/user-not-found': {
                return 'Nem található ilyen felhasználó.';
            }
            case 'auth':{
                return 'Hibás jelszót adtál meg. '
            }
            case 'auth/missing-password':{
                return 'Nem adtál meg jelszót. '
            }
            default: {
                return 'Hiba történt a bejelentkezéssel próbálja később.';
            }
        }
    }
}