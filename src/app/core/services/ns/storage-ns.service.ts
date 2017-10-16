import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable()
export class StorageNsService extends StorageService {

    constructor() {
        super();
        console.log('constructing StorageNsService');
    }

    setItem(key: string, value: string | number): void {
        throw new Error('Method not implemented.');
    }
    getItem(key: string): string {
        throw new Error('Method not implemented.');
    }
    removeItem(key: string): void {
        throw new Error('Method not implemented.');
    }
    key(keyIndex: number): string {
        throw new Error('Method not implemented.');
    }
    clear(): void {
        throw new Error('Method not implemented.');
    }
}
