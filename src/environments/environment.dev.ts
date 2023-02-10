export const environment = {
    production: false,
    msalConfig: {
        auth: {
            // this comes from B2C tenant app reg aad-b2c-ui
            clientId: '4987fff8-2573-4838-96b8-c87302b1185d',
        }
    },
    apiConfig: {
        // example scope is defined in B2C tenant app reg aad-b2c-api
        scopes: ['https://jamesstill.onmicrosoft.com/aad-b2c-api/weatherforecast.reader'],
        uri: 'https://aad-b2c-api.azurewebsites.net'
        //uri: 'https://localhost:7026'
    },
    b2cPolicies: {
        names: {
            signUpSignIn: "b2c_1_susi",
            resetPassword: "b2c_1_reset",
            editProfile: "b2c_1_edit_profile"
        },
        authorities: {
            signUpSignIn: {
                authority: 'https://jamesstill.b2clogin.com/jamesstill.onmicrosoft.com/b2c_1_susi'
            },
            resetPassword: {
                authority: 'https://jamesstill.b2clogin.com/jamesstill.onmicrosoft.com/b2c_1_reset'
            },
            editProfile: {
                authority: "https://jamesstill.b2clogin.com/jamesstill.onmicrosoft.com/b2c_1_edit_profile"
            }
        },
        authorityDomain: "jamesstill.b2clogin.com"
    }
};
