require 'capybara'
require 'capybara/poltergeist'
require 'phantomjs'
Capybara.register_driver :poltergeist do |app|
    Capybara::Poltergeist::Driver.new(app, :phantomjs => Phantomjs.path)
end

include Capybara::DSL
Capybara.default_driver = :poltergeist

module CustomHelpers
  def instagram_scraper
    visit "https://www.instagram.com/explore/tags/fearlessatapmas/"
    @posts = []
    all("article div div div a").each do |post|

      link = post['href']
      image = post.find("img")['src']

      info = {
        'link' => link,
        'image' => image
      }

      @posts << info

    end
  end

end
