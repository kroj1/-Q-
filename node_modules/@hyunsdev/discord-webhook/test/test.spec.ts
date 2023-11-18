import { Webhook, Embed } from '../dist';

const WEBHOOK_URL = ''; // Put your webhook URL here

test('Send message', async () => {
    const webhook = new Webhook(WEBHOOK_URL);

    const res = await webhook.send('Hello, world!');

    expect(res.status).toBe(204);
});

test('Send Embed', async () => {
    const webhook = new Webhook(WEBHOOK_URL);

    const embed = new Embed({
        title: 'Hello, world!',
        description: 'This is an embed.',
        fields: [
            {
                name: 'Field 1',
                value: 'Hello, world!',
                inline: true,
            },
            {
                name: 'Field 2',
                value: 'Hello, world!',
                inline: true,
            },
            {
                name: 'Field 3',
                value: 'Hello, world!',
            },
        ],
    });

    const res = await webhook.send('', [embed]);

    expect(res.status).toBe(204);
});

test('Send Message to invalid URL', async () => {
    const webhook = new Webhook(
        'https://discord.com/api/webhooks/1234567890/1234567890',
    );

    await expect(webhook.send('Hello, world!')).rejects.toThrow();
});
