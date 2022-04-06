import { TestBed } from '@angular/core/testing';

import { OpenseaGalleryService } from './opensea-gallery.service';

describe('OpenseaGalleryService', () => {
  let service: OpenseaGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenseaGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
