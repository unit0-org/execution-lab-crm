'use server'

import { buildDigest } from '@/lib/digest/controllers/buildDigest'
import { withMember } from '@/lib/auth/withMember'
import { emptyDigest } from './emptyDigest'

export const digestAction = withMember(() => buildDigest(), emptyDigest())
