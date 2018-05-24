/* This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    // Test suit about RSS feeds
    describe('RSS Feeds', function() {

        //Test checking if all feeds ar defined and if they are not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Test checking if URL of the feed is defined and if it's not empty
        it('has URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });

        //Test checking if feed has a name and if it's not empty
        it('has a Name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    //Test suit "The menu" 
    describe('The menu', function() {
        var body = document.body;
        var menu = document.querySelector(".menu-icon-link");
    
        //Test checking if menu element is hidden by default
        it('menu is hidden', function() {
            expect(body.className).toContain("menu-hidden");
        });

        //Test checking if menu toggles between visible/hidden when clicked on
        it('menu toggle between show/hidden with a click', function() {
            menu.click();
            expect(body.className).not.toContain("menu-hidden");

            menu.click();
            expect(body.className).toContain("menu-hidden");
        });
    });


    //Test suite "Initial Entries"
    describe('Initial Entries', function() {

        //Test checking if feed has at least one entry after loadFeed function completes it's work
         beforeEach(function(done) {
            loadFeed(0, done);
         });

         it('feed has at least one entry', function() {
            var entry = document.querySelector(".entry");
            expect(entry.length).not.toBe(0);
         });
    });

    //Test suite "New Feed Selection" 
    describe('New Feed Selection', function() {
        var firstFeed;

        //Checking initially loaded feed
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = document.querySelector(".feed").innerHTML;
                loadFeed(1, function() {
                    done();
                });
                
            });
        });
        
        //Test checking if content changes after new feed is loaded
        it('content changes', function(done) {
            var newFeed = document.querySelector(".feed").innerHTML;
            expect(firstFeed).not.toBe(newFeed);
            done();
        });
    });
    
}());
