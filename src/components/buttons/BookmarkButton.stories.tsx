import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import BookmarkButton from './BookmarkButton';

const meta = {
  component: BookmarkButton,
  tags: ['autodocs'],
  args: {
    bookmarked: false,
  },
} satisfies Meta<typeof BookmarkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveDemo({ isBookmarked = false }: { isBookmarked?: boolean } = {}) {
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  return (
    <BookmarkButton
      bookmarked={bookmarked}
      onBookmarkChange={setBookmarked}
      aria-label="북마크"
    />
  );
}

export const Default: Story = {
  render: () => <InteractiveDemo />,
};

export const Bookmarked: Story = {
  render: () => <InteractiveDemo isBookmarked={true} />,
};