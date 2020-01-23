import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardComponent } from './image-card.component';
import { IGiphySearchDataItem } from '../interfaces/common-interfaces';

class MockDataCardComponent {
  image: IGiphySearchDataItem = {
    type: 'gif',
    id: 'PvXWvjxI82nNm',
    url: 'https://giphy.com/gifs/hair-men-evolution-PvXWvjxI82nNm',
    slug: 'hair-men-evolution-PvXWvjxI82nNm',
    bitly_gif_url: 'https://gph.is/1NrF5zO',
    bitly_url: 'https://gph.is/1NrF5zO',
    embed_url: 'https://giphy.com/embed/PvXWvjxI82nNm',
    username: '',
    source: 'https://mtvstyle.tumblr.com/post/132542223817/watch-100-years-worth-of-mens-hair-trends',
    title: 'mtv style hair GIF',
    rating: 'g',
    content_url: '',
    source_tld: 'mtvstyle.tumblr.com',
    source_post_url: 'https://mtvstyle.tumblr.com/post/132542223817/watch-100-years-worth-of-mens-hair-trends',
    is_sticker: 0,
    import_datetime: '2015-11-04 16:18:59',
    trending_datetime: '0000-00-00 00:00:00',
    images: {
      downsized_large: {
        height: '270',
        size: '1312929',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy.gif',
        width: '480'
      },
      fixed_height_small_still: {
        height: '100',
        size: '9182',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/100_s.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=100_s.gif',
        width: '178'
      },
      original: {
        frames: '30',
        hash: '9d6e16c3b0b1fd7346844ba53d4a92ce',
        height: '270',
        mp4: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy.mp4?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy.mp4',
        mp4_size: '177608',
        size: '1312929',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy.gif',
        webp: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy.webp?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy.webp',
        webp_size: '323790',
        width: '480'
      },
      fixed_height_downsampled: {
        height: '200',
        size: '138148',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200_d.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200_d.gif',
        webp: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200_d.webp?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200_d.webp',
        webp_size: '79320',
        width: '356'
      }, downsized_still: {
        height: '270',
        size: '29451',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy-downsized_s.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy-downsized_s.gif',
        width: '480'
      }, fixed_height_still: {
        height: '200',
        size: '21132',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200_s.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200_s.gif',
        width: '356'
      },
      downsized_medium: {
        height: '270',
        size: '1312929',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy.gif',
        width: '480'
      },
      downsized: {
        height: '270',
        size: '839666',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy-downsized.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy-downsized.gif',
        width: '480'
      },
      preview_webp: {
        height: '144',
        size: '47886',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy-preview.webp?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy-preview.webp',
        width: '256'
      },
      original_mp4: {
        height: '270',
        mp4: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy.mp4?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy.mp4',
        mp4_size: '177608',
        width: '480'
      },
      fixed_height_small: {
        height: '100',
        mp4: 'https://media0.giphy.com/media/PvXWvjxI82nNm/100.mp4?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=100.mp4',
        mp4_size: '38020',
        size: '243966',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/100.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=100.gif',
        webp: 'https://media0.giphy.com/media/PvXWvjxI82nNm/100.webp?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=100.webp',
        webp_size: '90844',
        width: '178'
      },
      fixed_height: {
        height: '200',
        mp4: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200.mp4?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200.mp4',
        mp4_size: '101183',
        size: '603593',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200.gif',
        webp: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200.webp?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200.webp',
        webp_size: '215390',
        width: '356'
      },
      downsized_small: {
        height: '270',
        mp4: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy-downsized-small.mp4?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy-downsized-small.mp4',
        mp4_size: '177608',
        width: '480'
      }, preview: {
        height: '142',
        mp4: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy-preview.mp4?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy-preview.mp4',

        mp4_size: '34091',
        width: '252'
      },

      fixed_width_downsampled: {
        height: '113',
        size: '61795',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200w_d.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200w_d.gif',
        webp: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200w_d.webp?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200w_d.webp',
        webp_size: '31672',
        width: '200'
      },
      fixed_width_small_still: {
        height: '57',
        size: '3868',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/100w_s.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=100w_s.gif',
        width: '100'
      },
      fixed_width_small: {
        height: '57',
        mp4: 'https://media0.giphy.com/media/PvXWvjxI82nNm/100w.mp4?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=100w.mp4',
        mp4_size: '18201',
        size: '90565',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/100w.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=100w.gif',
        webp: 'https://media0.giphy.com/media/PvXWvjxI82nNm/100w.webp?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=100w.webp',
        webp_size: '44494',
        width: '100'
      },
      original_still: {
        height: '270',
        size: '73175',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy_s.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy_s.gif',
        width: '480'
      },
      fixed_width_still: {
        height: '113',
        size: '11381',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200w_s.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200w_s.gif',
        width: '200'
      },
      looping: {
        mp4: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy-loop.mp4?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy-loop.mp4',
        mp4_size: '1320418'
      },
      fixed_width: {
        height: '113',
        mp4: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200w.mp4?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200w.mp4',
        mp4_size: '42519',
        size: '276689',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200w.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200w.gif',
        webp: 'https://media0.giphy.com/media/PvXWvjxI82nNm/200w.webp?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=200w.webp',
        webp_size: '102334',
        width: '200'
      },
      preview_gif: {
        height: '54',
        size: '49839',
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/giphy-preview.gif?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=giphy-preview.gif',
        width: '96'
      },
      '480w_still': {
        url: 'https://media0.giphy.com/media/PvXWvjxI82nNm/480w_s.jpg?cid=d3ca3a3f356a5216392d85942852a0b8445ea2208b4466eb&rid=480w_s.jpg',
        width: '480',
        height: '270'
      }
    },
    analytics: {
      onload: {
        url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=356a5216392d85942852a0b8445ea2208b4466eb&event_type=GIF_SEARCH&gif_id=PvXWvjxI82nNm&action_type=SEEN'
      },
      onclick: {
        url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=356a5216392d85942852a0b8445ea2208b4466eb&event_type=GIF_SEARCH&gif_id=PvXWvjxI82nNm&action_type=CLICK'
      },
      onsent: {
        url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=356a5216392d85942852a0b8445ea2208b4466eb&event_type=GIF_SEARCH&gif_id=PvXWvjxI82nNm&action_type=SENT'
      }
    }
  };
}

describe('ImageCardComponent', () => {
  let component: ImageCardComponent;
  let fixture: ComponentFixture<ImageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardComponent);
    component = fixture.componentInstance;
    component.image = new MockDataCardComponent().image;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
