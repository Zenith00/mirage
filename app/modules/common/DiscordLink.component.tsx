import { Badge } from '@mantine/core';
import React from 'react';

const DiscordLink = ({ colorScheme }: {colorScheme:'dark' | 'light' }) => (
  <div style={{ display: 'flex', marginLeft: 'auto' }}>
    <Badge
      mr="sm"
      style={{
        cursor: 'pointer',
        width: 150,
      }}
      component="a"
      href="https://discord.com/invite/dndnext"
      variant="outline"
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {colorScheme === 'dark' ? (
          <img
            src="/img/Discord-Logo-White.svg"
            width={18}
            height={18}
            alt=""
          />
        ) : (
          <img
            src="/img/Discord-Logo-Black.svg"
            width={18}
            height={18}
            alt=""

          />
        )}
        <p style={{ paddingLeft: '4px' }}>
          Made with 💖
        </p>

      </div>
    </Badge>
  </div>
);
export default DiscordLink;
