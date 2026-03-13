import { Metadata } from 'next';
import { t } from '@/lib/server-i18n';

export const metadata: Metadata = {
  title: t('meta.team_title'),
  description: t('meta.team_description'),
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
