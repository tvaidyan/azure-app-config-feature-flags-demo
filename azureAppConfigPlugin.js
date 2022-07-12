import { AppConfigurationClient } from '@azure/app-configuration';

const connectionString = 'you-azure-configuration-readonly-connection-string-goes-here';
let client = null;

if (connectionString) {
    client = new AppConfigurationClient(connectionString);
}

const featurFlagsManager = {
    async getFeatureFlag(name) {
        try {
            const response = await client.getConfigurationSetting({
                key: `.appconfig.featureflag/${name}`,
                label: 'local' // you can use an environment variable to inject this at runtime, if necessary
            });
            return JSON.parse(response.value).enabled;
        } catch (error) {
            console.error('error in feature flag fetch', error);
            return false;
        }
    }
};

export default {
    install: (Vue, options) => {
        // inject a globally available property
        Vue.provide('$featurFlagsManager', featurFlagsManager);
    }
};
