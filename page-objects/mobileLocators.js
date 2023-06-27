module.exports = {
  // Android pedometer locators
  openningText: "//*[contains(@text, 'Pedometer can count your steps in background and provides an overview about walked steps and calorie burn.')]",
  next: 'id=com.divinememorygames.pedometer:id/btn_next',
  skip: 'id=com.divinememorygames.pedometer:id/btn_skip',
  allow_button: 'id=com.android.permissioncontroller:id/permission_allow_button',
  goal: 'id=com.divinememorygames.pedometer:id/goal',
  setGoal: 'id=android:id/numberpicker_input',
  goal: 'id=com.divinememorygames.pedometer:id/goal',
  ok_button: 'id=android:id/button1',
  height: 'id=com.divinememorygames.pedometer:id/height',
  weight: 'id=com.divinememorygames.pedometer:id/weight',
  age: 'id=com.divinememorygames.pedometer:id/age',
  home: 'id=com.divinememorygames.pedometer:id/largeLabel',
  activity: '//android.widget.FrameLayout[@content-desc="Activity"]/android.widget.ImageView',
  eyeCare: '//android.widget.FrameLayout[@content-desc="Eye Care"]/android.widget.ImageView',


  // iOS safari locatores
  safari: '~Safari',
  navigation_bar: '~CapsuleNavigationBar?isSelected=true',
  search_box: '~privacyReportIdentifierHeader',
  search_result: '~MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday, makemytrip.com',
  close_registration: '(//XCUIElementTypeStaticText[@name="Flights"])[1]',
  flight: '(//XCUIElementTypeStaticText[@name="Flights"])[1]',
  mob_fromCity: '~FROM',
  enterCity_name: '//XCUIElementTypeTextField[@value="Enter City/Airport Name"]',
  bengaluru: '//XCUIElementTypeStaticText[@label="Bengaluru"][2]',
  mob_toCity: '~TO',
  hyderabad: '(//XCUIElementTypeStaticText[@label="HYD"])[2]',
  deptDate: '~DEPARTURE DATE',
  traveller: '~TRAVELLER & CLASS',
  searchFlight: '~SEARCH FLIGHTS',
  flightList: '//XCUIElementTypeStaticText[@label="Bengaluru"]',
  keyboard_done: '~Done'
}