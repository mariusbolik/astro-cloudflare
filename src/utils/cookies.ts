export class Cookies {

    constructor() {

    }

    /**
     * Get cookie value by name
     * @param name cookie name to get
     */
    public getCookie(name: string) {
        try {
            var cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return cookie ? cookie[2] : null;
        } catch (error) {
            console.error("Could not get cookie", error);
        }
    }

    /**
     * Set cookie value by name
     * @param name cookie name to set
     * @param value cookie value to set
     * @param days number of days to expire
     */
    public setCookie(name: string, value: any, days: number) {
        try {
            var date = new Date;
            date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * days);
            document.cookie = name + "=" + value + ";path=/;expires=" + date.toUTCString();
        } catch (error) {
            console.error("Could not set cookie", error);
        }
    }
}