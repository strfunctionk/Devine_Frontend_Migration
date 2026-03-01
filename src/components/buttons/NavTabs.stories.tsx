import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import NavTabs from './NavTabs';

const meta = {
  component: NavTabs,
  tags: ['autodocs'],
  args: {
    items: [],
  },
} satisfies Meta<typeof NavTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

function MyProjectTabsDemo() {
  const [active, setActive] = useState('pm');
  return (
    <NavTabs
      items={[
        { href: 'pm', label: 'PM' },
        { href: 'dev', label: '개발자' },
      ]}
      isActive={(href) => href === active}
      onTabClick={setActive}
    />
  );
}

function SearchTabsDemo() {
  const [active, setActive] = useState('project');
  return (
    <NavTabs
      items={[
        { href: 'project', label: '프로젝트' },
        { href: 'developer', label: '개발자' },
      ]}
      isActive={(href) => href === active}
      onTabClick={setActive}
    />
  );
}

function ApplicationStatusTabsDemo() {
  const [active, setActive] = useState('applying');
  return (
    <NavTabs
      items={[
        { href: 'applying', label: '지원 중' },
        { href: 'in-progress', label: '진행 중' },
        { href: 'done', label: '완료' },
      ]}
      isActive={(href) => href === active}
      onTabClick={setActive}
    />
  );
}

function ProposalStatusTabsDemo() {
  const [active, setActive] = useState('proposed');
  return (
    <NavTabs
      items={[
        { href: 'proposed', label: '제안됨' },
        { href: 'status', label: '지원 현황' },
        { href: 'in-progress', label: '진행중' },
        { href: 'done', label: '완료' },
      ]}
      isActive={(href) => href === active}
      onTabClick={setActive}
    />
  );
}

export const MyProject: Story = {
  render: () => <MyProjectTabsDemo />,
};

export const Search: Story = {
  render: () => <SearchTabsDemo />,
};

export const ApplicationStatus: Story = {
  render: () => <ApplicationStatusTabsDemo />,
};

export const ProposalStatus: Story = {
  render: () => <ProposalStatusTabsDemo />,
};
