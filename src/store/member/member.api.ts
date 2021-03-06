import {API} from 'src/api/API';
import {Secure} from 'src/decorators/api/Secure';
import {MemberDTO} from './member.interfaces';

export class MemberApi extends API {
  static url(prefix?: string): string {
    return `/member/${prefix}`;
  }

  @Secure()
  async fetch(): Promise<MemberDTO.FetchResponse> {
    return this.get<MemberDTO.FetchResponse>(MemberApi.url());
  }

  @Secure()
  async fetchOne({id}: MemberDTO.FetchOneRequest): Promise<MemberDTO.FetchOneResponse> {
    return this.get<MemberDTO.FetchOneResponse>(MemberApi.url(id));
  }

  @Secure()
  async addOne(payload: MemberDTO.CreateRequest): Promise<MemberDTO.CreateResponse> {
    return this.post<MemberDTO.CreateResponse, MemberDTO.CreateRequest>(MemberApi.url('create'), payload);
  }

  @Secure()
  async updateOne(payload: MemberDTO.UpdateRequest): Promise<MemberDTO.UpdateResponse> {
    return this.put<MemberDTO.UpdateResponse, MemberDTO.UpdateRequest>(MemberApi.url(payload.id), payload);
  }

  @Secure()
  async removeOne({id}: MemberDTO.DeleteRequest): Promise<MemberDTO.DeleteResponse> {
    return this.delete<MemberDTO.DeleteResponse, MemberDTO.DeleteRequest>(MemberApi.url(id));
  }
}

export const memberApi = new MemberApi();
