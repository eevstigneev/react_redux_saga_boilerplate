export enum ROUTES {
  ADMIN = '/',
  AUTHORIZATION = '/login/',

  MEMBER_LIST = '/member/',
  MEMBER_CREATE = '/member/create',
  MEMBER_UPDATE = '/member/:memberId',
}

type Route =
  | {path: ROUTES.ADMIN}
  | {path: ROUTES.AUTHORIZATION}
  | {path: ROUTES.MEMBER_LIST}
  | {path: ROUTES.MEMBER_CREATE}
  | {path: ROUTES.MEMBER_UPDATE; params: {memberId: string}};

type RouteWithParams = Extract<Route, {path: string; params: Record<string, string>}>;

export const createPath = (route: Route): string => {
  if (!('params' in route)) return route.path;

  // Create a path by replacing params in the route definition
  const {path, params} = route as RouteWithParams;
  return Object.entries(params).reduce(
    (previousValue: string, [param, value]) => previousValue.replace(`:${param}`, `${value}`),
    path,
  );
};
