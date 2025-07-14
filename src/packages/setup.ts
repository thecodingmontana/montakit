import * as clack from '@clack/prompts';
import color from 'picocolors';
import { ProjectConfig } from '../types/index.js';
import path from 'path';
import { execSync } from 'child_process';
import fs from 'fs';

const AVAILABLE_FRAMEWORK = [
    { value: 'nuxtjs', label: 'NuxtJS', hint: 'The progressive web framework.' },
    { value: 'nextjs', label: 'NextJS', hint: 'The react framework for the web.' }
]

const AVAILABLE_ORMS = [
    { value: 'drizzle', label: 'Drizzle', hint: 'Lightweight, SQL-first ORM with type-safe queries and minimal overhead.' },
    { value: 'prisma', label: 'Prisma', hint: 'Type-safe, full-featured ORM with migrations and an intuitive API.' }
]

const AVAILABLE_STYLING_LIBRARY = [
    { value: 'tailwind', label: 'TaiwlindCSS', hint: 'A utility-first CSS framework.' },
    { value: 'shadcn-ui', label: 'TailwindCSS + Shadcn UI', hint: 'A set of beautifully-designed, accessible, customizable components' },
    { value: 'plain', label: 'Plain', hint: 'No CSS framework or pre-made component library.' },
]

const DEFAULT_FRAMEWORK = 'nuxtjs'
const DEFAULT_STYLING_LIBRARY = 'shadcn-ui'
const DEFAULT_ORM = 'drizzle'

export default async function setup(config: ProjectConfig): Promise<void> {
    console.clear();

    clack.intro(color.inverse('🎉 Welcome to Montakit CLI '));

    config.name = await clack.text({
        message: "What's the name of your project?",
        placeholder: 'my-nuxt-app',
        validate: (value) => {
            if (!value) return 'Project name is required';
            if (!/^[a-zA-Z0-9-_]+$/.test(value)) return 'Project name can only contain letters, numbers, hyphens, and underscores';
            return;
        }
    }) as string;

    if (clack.isCancel(config.name)) {
        clack.cancel('Operation cancelled!');
        process.exit(0);
    }

    config.path = path.join(process.cwd(), config.name);

    // Check if directory exists
    if (fs.existsSync(config.path)) {
        const shouldOverwrite = await clack.confirm({
            message: `A directory already exists with the name ${config.name}. Do you want to overwrite it?`,
            initialValue: false
        });

        if (clack.isCancel(shouldOverwrite)) {
            clack.cancel('Operation cancelled');
            process.exit(0);
        }

        if (!shouldOverwrite) {
            clack.cancel('Project setup cancelled');
            process.exit(0);
        }
    }

    // ask about project framework
    const selectedFramework = await clack.select({
        message: 'Which frontend framework would you like to use?',
        options: AVAILABLE_FRAMEWORK,
        initialValue: DEFAULT_FRAMEWORK,
    });

    if (clack.isCancel(selectedFramework)) {
        clack.cancel('Operation cancelled');
        process.exit(0);
    }

    config.framework = selectedFramework as string;

    // ask about styling library
    const selectedStylingLibrary = await clack.select({
        message: 'Which styling library do you prefer?',
        options: AVAILABLE_STYLING_LIBRARY,
        initialValue: DEFAULT_STYLING_LIBRARY,
    });

    if (clack.isCancel(selectedStylingLibrary)) {
        clack.cancel('Operation cancelled');
        process.exit(0);
    }

    config.styling_library = selectedStylingLibrary as string;

    // ask about ORM
    const selectedORM = await clack.select({
        message: 'Which ORM would you like to use?',
        options: AVAILABLE_ORMS,
        initialValue: DEFAULT_ORM,
    });

    if (clack.isCancel(selectedORM)) {
        clack.cancel('Operation cancelled');
        process.exit(0);
    }

    config.orm = selectedORM as string;

    // ask about DB
    const selectedDB = await clack.select({
        message: 'Which database would you like to use?',
        options: AVAILABLE_ORMS,
        initialValue: DEFAULT_ORM,
    });

    if (clack.isCancel(selectedDB)) {
        clack.cancel('Operation cancelled');
        process.exit(0);
    }

    config.orm = selectedORM as string;
}