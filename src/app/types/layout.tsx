import { Metadata } from 'next';
import { t } from '@/lib/server-i18n';

export const metadata: Metadata = {
  title: t('meta.types_title'),
  description: t('meta.types_description'),
};

export default function TypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
