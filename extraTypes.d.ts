declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.worker.ts' {
  class CustomWorker extends Worker {
    constructor();
  }

  export default CustomWorker;
}
