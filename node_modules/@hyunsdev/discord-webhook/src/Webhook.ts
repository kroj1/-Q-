import axios, { AxiosError } from 'axios';
import { WebhookError } from './Error';
import {
    APIActionRowComponent,
    APIAllowedMentions,
    APIEmbed,
    APIMessageActionRowComponent,
} from 'discord-api-types/v10';

export class Webhook {
    url: string;
    userName?: string;
    avatarUrl?: string;

    constructor(url: string, userName?: string, avatarUrl?: string) {
        if (url === '') {
            throw new Error('Webhook URL is empty');
        }

        this.url = url;
        this.userName = userName;
        this.avatarUrl = avatarUrl;
    }

    async get() {
        try {
            return await axios.get(this.url);
        } catch (err) {
            throw new WebhookError(err.response.data);
        }
    }

    async send(
        content: string,
        embeds: APIEmbed[] = [],
        allowedMentions: APIAllowedMentions = {},
        tts = false,
        components: APIActionRowComponent<APIMessageActionRowComponent>[] = [],
    ) {
        try {
            const res = await axios.post(this.url, {
                content: content,
                username: this.userName,
                avatar_url: this.avatarUrl,
                tts: tts,
                embeds: embeds,
                allowed_mentions: allowedMentions,
                components,
            });
            return res;
        } catch (err) {
            if (err instanceof AxiosError) {
                if ('response' in err) {
                    throw new WebhookError(err.response.data);
                } else {
                    throw err;
                }
            } else {
                throw err;
            }
        }
    }
}
