class ApartmentsController < ApplicationController
    before_action :set_apartment, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!
    skip_before_action :verify_authenticity_token
    
    def new
    end
    
    def index
        @apartments = Apartment.all
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

    def destroy
        @apartment = Apartment.find(params[:id])
        if @apartment.destroy
            render json: @guitar
       
        else
            render json: @guitar.errors
    end

    def update
        apartment = Apartment.find(params[:id])
        apartment.update_attributes(apartment_params)
        render json: apartment
    end

    # def update
    #     respond_to do |format|
    #       if @apartment.update(apartment_params)
    #         format.html { redirect_to @apartment, notice: 'apartment was successfully updated.' }
    #       else
    #         format.html { render :edit }
    #       end
    #     end
    #   end


    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :postal_code, :manager_name, :manager_contact, :manager_contact_hours)
    end
end
