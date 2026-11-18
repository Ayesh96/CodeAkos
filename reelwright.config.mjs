// Starter ReelWright config. In CI the deployed URL replaces `server.url` (--url).
// Edit it to add scenes, or add scenes in the ReelWright dashboard: both are used.
export default {
  server: { url: 'https://example.com' },
  screenshots: async ({ open, snap }) => {
    const { page } = await open();
    await snap(page, 'home.png');
  },
};
