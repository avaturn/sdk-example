export const useSearchParams = () => {
  return new URL(window.location.href).searchParams;
};
