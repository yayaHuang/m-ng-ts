export default class BootstrapService {
  public static resolve;
  public static promise = new Promise((resolve) => {
    BootstrapService.resolve = resolve;
  });
}
