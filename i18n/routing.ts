import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt', 'en', 'es', 'fr', 'de'],
  defaultLocale: 'pt',
  localePrefix: 'as-needed',
  // Não redirecionar "/" para /en, /de… conforme o idioma do navegador ou um cookie antigo:
  // a Google desaconselha estes redirecionamentos automáticos (podem esconder a versão PT dos
  // motores de busca). O visitante muda de idioma no seletor; os hreflang tratam do resto.
  localeDetection: false
});
