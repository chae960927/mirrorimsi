/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "1845106", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "028bc37bb76d06d73bbc497021d12d4d" // Professor. Choi api♥
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "1835847", //ID from http://b/home/pi/practice/Mirror-code/modules/MMM-OneBusAway/node_helper.jsulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "028bc37bb76d06d73bbc497021d12d4d" // Professor. Choi api♥
			}
		},
			{ 
				module : 'calendar_monthly' , 
				position : 'top_left' , 
				config : { 
						// 구성 속성은 선택 사항입니다. 
						// 구성이 없으면 기본 월별보기가 표시됩니다. 
						// 자세한 내용은 '구성 옵션'섹션을 참조하세요. 정보 
				} 
			},
		{
			module: "calendar",
			header: "Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://p03-calendars.icloud.com/holidays/kr_ko.ics"					}
				]
			}
		},


{ 
    module : "MMM-AC-aseag" , 
    position : "bottom_right" , 
    header : "Misereor Abfahrten" , 
    config : { 
        retryDelay : 5 * 1000 ,  // 실패시 재시도 전 대기 시간 
        maximumEntries : 5 ,  // 테이블에 표시되는 최대 항목 수 
        updateInterval : 1 * 60 * 1000 ,  // 업데이트 간격 (마이크로 초) 
        stop : "" , 
    } 
},

   {
			module: "MMM-MP3Player",
			position: "top_right",
			config: {
				musicPath: "modules/MMM-MP3Player/music/", 
				autoPlay: true,
				random: false,
				loopList: true,
			}
        },

{
		module: "MMM-EmbedYoutube", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
		position: "top_center",	// This can be any of the regions.
		config: {
			// See 'Configuration options' in README.md for more information.
			video_id: "VN87vjAKHbQ",
			loop: true
		}
	},
 {
            module: 'MMM-OnScreenMenu',
            position: 'bottom_right',
            /* Valid positions: 'top_right', 'top_left', 'bottom_right', 'bottom_left' */
            config: {
                touchMode: true,
                enableKeyboard: true,
                // ... see more options below
            }
        }


	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
