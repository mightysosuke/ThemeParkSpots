require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ThemeParkSpots
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # デフォルトのlocaleを日本語(:ja)にする
    config.i18n.default_locale = :ja

    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s]

    # エラー時のレイアウト崩れを防ぐ
    config.action_view.field_error_proc = Proc.new { |html_tag, instance| html_tag }

    config.assets.initialize_on_precompile = false

    ### Railsが表示の際に扱うタイムゾーン
    config.time_zone = 'Tokyo'

    ### Rails(Activerecord)がDBへのRead・Writeを行う際タイムゾーン
    config.active_record.default_timezone = :local

  end
end
