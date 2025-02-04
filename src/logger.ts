class Logger {
  debugModeEnabled: boolean;

  constructor(debugModeEnabled?: boolean) {
    this.debugModeEnabled = !!debugModeEnabled;
  }

  debug(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.debug('[Ecodesk]', ...args);
  }

  log(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.log('[Ecodesk]', ...args);
  }

  info(...args: any) {
    console.info('[Ecodesk]', ...args);
  }

  warn(...args: any) {
    console.warn('[Ecodesk]', ...args);
  }

  error(...args: any) {
    console.error('[Ecodesk]', ...args);
  }
}

export default Logger;
