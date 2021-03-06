const AUTH0_CLIENT_ID = 'vo9u9GqQE0HdjEzjbjr1h7ST2oxjPZYj';
const AUTH0_DOMAIN = 'hendrikswan.eu.auth0.com';

class Auth {
    constructor() {
        this.createLock();
    }

    showLock() {
        this.lock.show();
    }

    createLock() {
        this.lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN); // eslint-disable-line no-undef
    }

    logOut() {
        localStorage.removeItem('userToken');
        window.location.href = 'https://hendrikswan.eu.auth0.com/v2/logout?returnTo=http://localhost:8080';
    }

    getProfile({ idToken }) {
        return new Promise((resolve, reject) => {
            this.lock.getProfile(idToken, (err, profile) => {
                if (err) {
                    return reject(err);
                }

                return resolve(profile);
            });
        });
    }

    getIdToken() {
        let idToken = localStorage.getItem('userToken');
        const authHash = this.lock.parseHash(window.location.hash);
        if (!idToken && authHash) {
            if (authHash.id_token) {
                idToken = authHash.id_token;
                localStorage.setItem('userToken', authHash.id_token);
            }
        }
        return idToken;
    }
}

export default new Auth();
