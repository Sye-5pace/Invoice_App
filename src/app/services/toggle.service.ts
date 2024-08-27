import { Store } from '@ngrx/store';

export abstract class ToggleService {
  protected isActive: boolean = false;

  constructor(protected store?: Store<any>) { }

  abstract toggle(): void ;
}
