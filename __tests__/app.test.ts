import app from '../src/app';

describe('test success', () => {
    test('test url', async () => {
        const url = 'https://ui.com/microsite/static/media/app-world-diagram.ac485e5a.jpg';
        expect(await app.flipSharp(url)).toBe(true);
    });

    test('test file path', async () => {
        const fPath = '__tests__/test.jpeg';
        expect(await app.flipSharp(fPath)).toBe(true);
    });
});

describe('test failed', () => {
    test('path does not exist', async () => {
        const fPath = '__tests__/path/does/not/exists.jpeg';
        expect(await app.flipSharp(fPath)).toBe(false);
    });

    test('test url not found', async () => {
        const url = 'https://ui.com/microsite/static/media/app-world-diagram.ac485e5a.jpgg';
        expect(await app.flipSharp(url)).toBe(false);
    });
});