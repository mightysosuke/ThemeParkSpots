class PlacesController < ApplicationController
  before_action :set_place, only: [:show, :edit, :update, :destroy]

  # GET /places
  # GET /places.json
  # 投稿一覧画面を表示
  def index
    @places = Place.all
    gon.places = @places
    gon.url = []

    # 各placeのimageの1枚目のURLのみを取得
    @places.each_with_index do |place, i|
      gon.url[i] = url_for(place.images.first) if place.images.count != 0
    end

  end

  # GET /places/1
  # GET /places/1.json
  # 投稿詳細画面を表示
  def show
    gon.lat = @place.latitude
    gon.lng = @place.longitude
  end

  # 自分の投稿の一覧を表示
  def myplace
    @places = Place.where(user_id: current_user.id)
    gon.places = @places
    gon.url = []
    @places.each_with_index do |place, i|
      gon.url[i] = url_for(place.images.first) if place.images.count != 0
    end
  end

  # GET /places/new
  # 新しいインスタンスの生成
  def new
    @place = Place.new
  end

  # GET /places/1/edit
  # 投稿編集画面を表示
  def edit
    gon.lat = @place.latitude
    gon.lng = @place.longitude
  end

  # POST /places
  # POST /places.json
  # 新規投稿を作成
  def create
    @place = current_user.places.new(place_params)
    respond_to do |format|
      if @place.save
        format.html { redirect_to @place, notice: 'スポットが投稿されました' }
        format.json { render :show, status: :created, location: @place }
      else
        # binding.pry
        format.html { render :new }
        format.json { render json: @place.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /places/1
  # PATCH/PUT /places/1.json
  # 投稿内容を更新
  def update
    respond_to do |format|
      if @place.update(place_params)
        format.html { redirect_to @place, notice: 'スポットの詳細が変更されました' }
        format.json { render :show, status: :ok, location: @place }
      else
        format.html { render :edit }
        format.json { render json: @place.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /places/1
  # DELETE /places/1.json
  # 投稿を削除
  def destroy
    @place.destroy
    respond_to do |format|
      format.html { redirect_to places_myplace_path, notice: 'スポットが削除されました' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_place
      @place = Place.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def place_params
      params.require(:place).permit(:user_id, :name, :description, :area_id, :address, :latitude, :longitude, images:[])
    end
end
