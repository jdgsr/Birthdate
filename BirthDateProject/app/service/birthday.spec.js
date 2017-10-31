describe( 'Birthday service test', function() {

var birthdayService;

beforeEach( module( 'birthdayApp.service.birthdayService' ) );

beforeEach(inject(function($injector) {
  birthdayService = $injector.get('birthdayService');
}));

it('should get data when called', function() {
  var birthDetails =[];
  birthdayService.getData().then(function(result){
   birthDetails = result;
       console.log(birthDetails);
  expect(birthDetails).toBeDefined();
  expect(birthDetails[0].month).toEqual('Jan');

  });
it("pull data function should not exist", function() {
 expect(birthdayService.pullData).toBeDefined();
	});
	});
	});