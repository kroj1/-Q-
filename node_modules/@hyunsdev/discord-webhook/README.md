<p align="center">
  <img src="https://s3.hyuns.dev/hyuns.jpg" width="10%" alt="@hyunsdev/discord-webhook" />
</p>
<h1 align="center">@hyunsdev/discord-webhook</h1>
<h5 align="center">디스코드 웹훅 라이브러리</h5>
<p align="center">
    <a href="LICENSE"><img alt="GPLv3 License" src="https://img.shields.io/badge/License-GPLv3-blue"/></a>
  <img alt="Language" src="https://img.shields.io/badge/Language-Typescript-blue?logo=typescript"/>
</p>

---

## 개요

디스코드 웹훅을 보다 편리하게 사용할 수 있는 라이브러리입니다.

## Install

```
npm install @hyunsdev/discord-webhook
yarn add @hyunsdev/discord-webhook
```

## Usage

```typescript
import { Webhook, Embed } from '@hyunsdev/discord-webhook';

(async () => {
    const client = new Webhook('your-webhook-url', 'userName', 'avatarUrl');

    // Send Message
    await client.send('Message');

    // Send Embeds
    const embed = new Embed({
        title: 'Title',
        description: 'This is an embed.',
    });

    await client.send('', [embed]);
})();
```

### Embed Type

아래 내용은 쉬운 이해를 위해 임의로 코드를 변형한 내용입니다. 정확한 정의는 `src/Embed.ts` 를 확인해주세요.

```typescript
import { APIEmbed } from 'discord-api-types/v10';

class Embed implements APIEmbed {
    title?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: number;
    footer?: {
        text: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    image?: {
        url: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    thumbnail?: {
        url: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    provider?: {
        name?: string;
        url?: string;
    };
    author?: {
        name: string;
        url?: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    fields?: {
        name: string;
        value: string;
        inline?: string;
    }[];
}
```
