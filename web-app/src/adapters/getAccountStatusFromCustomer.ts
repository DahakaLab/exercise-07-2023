import type { ClientStatus } from "$types/api/customer";
import type { TagType } from "$components/tag/types";

export interface CLientTag {
  type: TagType;
  status: string;
} 

const tagStatuses: Record<ClientStatus, CLientTag> = {
  approved: {
    type: 'success',
    status: 'Approved',
  },
  archived: {
    type: 'info',
    status: 'Archived',
  },
  pending: {
    type: 'warning',
    status: 'Pending',
  },
  rejected: {
    type: 'error',
    status: 'Rejected',
  },
};

export const getAccountStatusFromCustomer = (status: ClientStatus) => tagStatuses[status];