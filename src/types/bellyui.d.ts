import 'belly-ui';
import * as theme from '@theme';

type Theme = typeof theme;

declare module 'belly-ui/identity' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
