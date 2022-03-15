import numpy as np
from flask import Flask, request, render_template
import pickle
import pandas as pd
from flask import jsonify


application = Flask(__name__)

model_logreg = pickle.load(open('Models/logreg.pkl', 'rb'))
model_logreg_half = pickle.load(open('Models/logreg_half.pkl', 'rb'))
model_linreg_24 = pickle.load(open('Models/linear_regression_24.pkl', 'rb'))

@application.route('/')
def home():
      
   return render_template('index.html')

@application.route('/api', methods=['GET'])

def api():
    
    home_team_menu = request.args.get('home_team')
    away_team_menu = request.args.get('away_team')

    df = pd.read_csv('list_last_update.csv') 
    
    home_team = df[df['Name']==home_team_menu]
    away_team = df[df['Name']==away_team_menu]
    
    X1 = np.array(home_team[['OVA', 'ATT', 'MID', 'DEF', 'Transfer Budget(M€)', 'Speed', 'Dribbling', 'Passing', 'Positioning', 'Crossing','Passing.1', 'Shooting', 'Positioning.1', 'Aggression', 'Pressure', 'Team Width', 'Defender Line', 'DP', 'IP']])
        
    X2 = np.array(away_team[['OVA', 'ATT', 'MID', 'DEF', 'Transfer Budget(M€)', 'Speed', 'Dribbling', 'Passing', 'Positioning', 'Crossing','Passing.1', 'Shooting', 'Positioning.1', 'Aggression', 'Pressure', 'Team Width', 'Defender Line', 'DP', 'IP']])
        
    X = np.concatenate((X1, X2), axis=None).astype(int)
    X = X.reshape(1, -1)
    
    prediction = model_logreg.predict(X)     #MATCH WINNER
    prediction2 = model_logreg.predict_proba(X)     #PROBABILITIES OF WINNING THE MATCH
    prediction3 = model_logreg_half.predict_proba(X)     #PROBABILITIES OF WINNING ON THE HALF TIME
    prediction_24 = model_linreg_24.predict(X) 
  
    prob_away_win_half = round(100*prediction3[0,0],1)     #PROBABILITY AWAY TEAM WINS
    prob_draw_game_half = round(100*prediction3[0,1],1)    #PROBABILITY DRAW GAME
    prob_home_win_half = round(100*prediction3[0,2],1)    #PROBABILITY HOME TEAM WINS
       
    prob_away_win = round(100*prediction2[0,0],1)     #PROBABILITY AWAY TEAM WINS
    prob_draw_game = round(100*prediction2[0,1],1)    #PROBABILITY DRAW GAME
    prob_home_win = round(100*prediction2[0,2],1)    #PROBABILITY HOME TEAM WINS
     
    total_goals_final = round(prediction_24[0,0],2)
    home_goals_final = round(prediction_24[0,1],2)
    away_goals_final = round(prediction_24[0,2],2)
    
    total_goals_half = round(prediction_24[0,3],2)
    home_goals_half = round(prediction_24[0,4],2)
    away_goals_half = round(prediction_24[0,5],2)

    
    home_team_shots = round(prediction_24[0,6],1)
    away_team_shots = round(prediction_24[0,7],1)
    full_time_shots = round(prediction_24[0,8],1)

    
    home_team_shots_target = round(prediction_24[0,9],1)
    away_team_shots_target = round(prediction_24[0,10],1)
    full_time_shots_target = round(prediction_24[0,11],1)

    
    home_team_corners = round(prediction_24[0,12],1)
    away_team_corners = round(prediction_24[0,13],1)
    full_time_corners = round(prediction_24[0,14],1)

    
    home_team_fouls_comitted = round(prediction_24[0,15],1)
    away_team_fouls_comitted = round(prediction_24[0,16],1)
    Total_fouls_comitted = round(prediction_24[0,17],1)

    
    home_team_yellow_cards = round(prediction_24[0,18],1)
    away_team_yellow_cards = round(prediction_24[0,19],1)
    Total_yellow_cards = round(prediction_24[0,20],1)

    
    home_team_red_cards = round(prediction_24[0,21],1)
    away_team_red_cards = round(prediction_24[0,22],1)
    Total_red_cards = round(prediction_24[0,23],1)

 
    return jsonify({'Probability home win half time (%)':str(prob_home_win_half),
                    'Probability draw game half time (%)':str(prob_draw_game_half),
                    'Probability away win half time (%)':str(prob_away_win_half),
                    'Half time total goals':str(total_goals_half),
                    'Half time home goals':str(home_goals_half),
                    'Half time away goals':str(away_goals_half),
                    'Full time total goals':str(total_goals_final),
                    'Full time home goals':str(home_goals_final),
                    'Full time away goals':str(away_goals_final),
                    'Full time shots':str(full_time_shots),
                    'Home team shots':str(home_team_shots),
                    'Away team shots':str(away_team_shots),
                    'Full time shots on target':str(full_time_shots_target),
                    'Home team shots on target':str(home_team_shots_target),
                    'Away team shots on target':str(away_team_shots_target),
                    'Full time corners':str(full_time_corners),
                    'Home team corners':str(home_team_corners),
                    'Away team corners':str(away_team_corners),
                    'Full time fouls comitted':str(Total_fouls_comitted),
                    'Home team fouls comitted':str(home_team_fouls_comitted),
                    'Away team fouls comitted':str(away_team_fouls_comitted),
                    'Full time yellow cards':str(Total_yellow_cards),
                    'Home team yellow cards':str(home_team_yellow_cards),
                    'Away team yellow cards':str(away_team_yellow_cards),
                    'Full time red cards':str(Total_red_cards),
                    'Home team red cards':str(home_team_red_cards),
                    'Away team red cards':str(away_team_red_cards)})


if __name__ == "__main__":
    application.run(debug=True)
