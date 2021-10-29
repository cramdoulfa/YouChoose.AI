import { Video } from '@backend/models/Video';
import * as t from 'io-ts';

export const Keypair = t.strict(
  {
    publicKey: t.string,
    secretKey: t.string,
  },
  'AccountKeys'
);

export type Keypair = t.TypeOf<typeof Keypair>;

/**
 * Account Settings
 *
 */
export const Settings = t.strict(
  {
    active: t.boolean,
    ccRecommendations: t.boolean,
    communityRecommendations: t.boolean,
    indipendentContributions: t.boolean,
    svg: t.boolean,
    videorep: t.boolean,
    playhide: t.boolean,
    alphabeth: t.boolean,
    ux: t.boolean,
    edit: t.union([Video, t.null]),
  },
  'AccountSettings'
);

export type Settings = t.TypeOf<typeof Settings>;
