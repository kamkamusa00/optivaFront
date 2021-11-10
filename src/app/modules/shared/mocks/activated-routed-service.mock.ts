export const activatedRouteMock = ({queryParam = '', routeParam = ''}) => ({
  snapshot: {
    queryParamMap: {
      get: () => queryParam,
    },
    paramMap: {
      get: () => routeParam,
    },
  },
});
