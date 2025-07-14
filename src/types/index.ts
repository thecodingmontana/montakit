export interface ProjectConfig {
    name: string;
    path: string;
    framework: string;
    styling_library: string
    orm: string,
    database: {
        name: string,
        password: string,
        username: string,
        type: string
    }
}