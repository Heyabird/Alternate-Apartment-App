class ApartmentsController < ApplicationController
    before_action :set_apartment, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!
    
    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        @apartment = current_user.apartments.new(apartment_params)

        respond_to do |format|
            if @apartment.save
                format.html { redirect_to @apartment, notice: 'Apartment was successfully created.' }
                format.json { render :show, status: :created, location: @apartment }
            else
                format.html { render :new }
                format.json { render json: @apartment.errors, status: :unprocessable_entity }
            end
        end
    end

    def new
    end

    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :postal_code, :manager_name, :manager_contact, :manager_contact_hours)
    end
end
