class SpotsController < ApplicationController
  def new
    @spot = Spot.new
  end

  def index

  end

  def create
    @spot = current_user.spots.new(spot_params)

    if @spot.save
      redirect_to new_spot_path, success: '投稿に成功しました'
    else
      flash.now[:danger] = '投稿に失敗しました'
      render :new
    end
  end

  private
  def spot_params
    params.require(:spot).permit(:spot_name, :spot_position)
  end
end
