// Import ScrollSnapSlider, i18n, Ionicons
import { ScrollSnapSlider } from 'scroll-snap-slider';
// import { astroI18n, t } from 'astro-i18n';

// Define types for slides
export type Slide = {
    video: string;
    items: any;
}
export type Slides = Slide[];

/**
 * Class for the intro modal
 * @param sliderRef reference to the slider element
 * @param videoRefs reference to the video elements
 * @param langPath path to the language file
 * @param lang language file
 * @param activeIndex active slide index
 * @param slidesTotal total number of slides
 * @param isLastSlide is last slide
 * @param videoCountdown countdown for videos
 * @param iconIndex index for icons
 * @param options options for the slider
 * @param introOpen is intro open
 * @param locale locale
 * @param slider slider
 * @function initSlider initialize the slider
 * @function slideNext scroll to next slide
 * @function destroySlider destroy the slider
 * @function showSlider show the slider
 * @function closeModal close the slider
 * @function updateCountdown update the countdown
 * @function toggleVideos toggle videos
 * @function reloadVideos reload videos
 */
export class IntroModal {
    // Define class vars
    public slider: ScrollSnapSlider | null = null;
    public locale: any;
    public introOpen: boolean;
    public langPath: string;
    public sliderRef: HTMLElement | null;
    public videoRefs: HTMLVideoElement[] | null;
    public lang: any;
    public activeIndex: number;
    public slidesTotal: number;
    public isLastSlide: boolean;
    public videoCountdown: any[];
    public iconIndex: any[any];

    //constructor
    constructor(sliderRef: HTMLElement | null = null, videoRefs: HTMLVideoElement[] | null = null, langpath: string = '') {
        this.sliderRef = sliderRef;
        this.videoRefs = videoRefs;
        this.langPath = langpath;
        // this.locale = astroI18n.locale;
        this.introOpen = false;
        // this.lang = t('modal');
        this.activeIndex = 0;
        this.slidesTotal = this.lang?.slides?.length || 1;
        this.isLastSlide = (this.activeIndex === this.slidesTotal - 1);
        this.videoCountdown = new Array(this.slidesTotal || 2).fill(0);
        this.iconIndex = {
            'document': 'document',
            'phone': 'phonePortrait',
            'camera': 'camera',
            'target': '/ui/icons/target.svg',
            'touch': '/ui/icons/touch.svg',
            'foot': '/ui/icons/foot2.svg',
            'sock': '/ui/icons/sock.svg',
            'sitting': '/ui/icons/sitting.svg',
        };
    }

    /**
     * Define function to initialize the slider
     */
    public initSlider() {
        if (this.sliderRef && this.slidesTotal > 0) {
            this.slider = new ScrollSnapSlider({ element: this.sliderRef });
            this.slider.addEventListener('slide-stop', (event: any) => {
                this.activeIndex = event.detail;
                // Start visible video, stop others
                this.toggleVideos();
            });
        }
    }

    /**
     * Define function to scroll to next slide
     */
    public slideNext() {
        if ((this.activeIndex + 1) === this.slidesTotal) {
            this.closeModal();
        } else {
            this.slider?.slideTo(this.activeIndex + 1);
        }
    }

    /**
     * Define function to destroy the slider
     */
    public destroySlider() {
        this.slider?.destroy();
    }

    /**
     * Define function to show the scroll snap slider
     * @param modalId id of the modal
     * @param modalOptions options for the modal
     */
    public showSlider(modalId: string) {
        // Don't open if already open
        if (this.introOpen) {
            return;
        }

        this.introOpen = true;
        this.langPath = modalId;
        this.activeIndex = 0;

        // Wait a bit until DOM got rendered
        setTimeout(() => {
            if (this.slidesTotal > 1) {
                this.initSlider();
                this.toggleVideos();
            }
        }, 500);
    }

    /**
     * Define function to close the scroll snap slider
     */
    public closeModal() {
        // Don't close if already closed
        if (!this.introOpen) {
            return;
        }

        this.destroySlider();
        this.introOpen = false;
    }

    /**
     * Define function to update the countdown
     * @param index index of the video
     */
    public updateCountdown(index: number) {
        const video = this.videoRefs ? this.videoRefs[index] : null;
        if (video && this.videoCountdown?.length && video?.duration && video?.currentTime) {
            this.videoCountdown[index] = Number((video.duration - video.currentTime).toFixed(0));
        }
    }

    /**
     * Define function to toggle videos
     */
    public toggleVideos() {
        this.videoRefs?.forEach((video, index) => {
            if (this.activeIndex === index) {
                video?.play().catch(e => console.log(e));
            } else {
                video?.pause();
                video.currentTime = 0;
            }
        });
    }

    /**
     * Define function to reload videos
     */
    public reloadVideos() {
        this.videoRefs?.forEach((video, index) => {
            video.load();
        });
    }

}