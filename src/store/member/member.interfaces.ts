export interface InitialState {
  isFetching: boolean;
  error: unknown;
  list: Member[];
  item: Member | null;
}

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MemberDTO {
  export type FetchRequest = void;
  export type FetchResponse = Member[];

  export type FetchOneRequest = Pick<Member, 'id'>;
  export type FetchOneResponse = Member;

  export type CreateRequest = Omit<Member, 'id'>;
  export type CreateResponse = Member;

  export type UpdateRequest = Partial<Member>;
  export type UpdateResponse = Member;

  export type DeleteRequest = Pick<Member, 'id'>;
  export type DeleteResponse = void;
}
