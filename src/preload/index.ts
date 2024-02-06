import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO: add your data here
  })
} catch (error) {
  console.error(error)
}
