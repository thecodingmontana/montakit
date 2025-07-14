#!/usr/bin/env node

import { ProjectConfig } from './types/index.js';
import setup from './packages/setup.js';

async function main() {
    const config: ProjectConfig = {
        name: '',
        path: '',
        framework: '',
        styling_library: '',
        orm: '',
        database: {
            name: '',
            password: '',
            username: '',
            type: ''
        }
    }

    await setup(config)

    console.log(config)
}

// Run the main function and handle errors
main().catch((error) => {
    console.error('Error:', error.message);
    process.exit(1);
});