import { Metadata } from 'next';
import { getPokemonDetail } from '@/lib/api';
import { t } from '@/lib/server-i18n';

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = (await params).name;
  try {
    const pokemon = await getPokemonDetail(name);
    const displayName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const types = pokemon.types
      .map((type) => t(`types.${type.type.name}`, { defaultValue: type.type.name }))
      .join(', ');
    const artwork = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

    const title = t('meta.pokemon_title', { name: displayName });
    const description = t('meta.pokemon_description', { name: displayName, types });

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: artwork || '' }],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [artwork || ''],
      }
    };
  } catch {
    return {
      title: t('meta.pokemon_fallback_title'),
    };
  }
}

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
